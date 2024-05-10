import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async login(dto: UpdateAuthDto) {
    const user = await this.userModel.findOne({
      userId: dto.userId,
    });
    if (!user) {
      throw new ForbiddenException('Unauthorized User');
    }
    const pwMatches = await argon.verify(user.password, dto.password);
    if (!pwMatches) {
      throw new ForbiddenException('Credential incorrect');
    }

    const accessToken = await this.signToken(user.id, user.userId);
    let data = {
      userId: user.userId,
      _id: user._id,
      accessToken,
    };
    console.log(data);
    return { data, message: 'user logged successfully' };
  }
  async register(dto: CreateAuthDto) {
    const password = dto.password;
    const hash = await argon.hash(password);
    console.log(dto);
    // post method creates new user and enter data to  user db
    try {
      const oldUser = await this.userModel.findOne({
        userId: dto.userId,
      });
      if (!oldUser) {
        const user = await new this.userModel({
          userId: dto.userId,
          password: hash,
        }).save();
        const accessToken = await this.signToken(user.id, user.userId);
        let data = {
          ...user,
          accessToken,
        };
        return { data, message: 'user signIn successfully' };
      } else {
        throw new ForbiddenException('Contact Number is already in use');
      }
    } catch (error) {
      if (error.name === 'MongoError' && error.code === 11000) {
        throw new ForbiddenException('Contact Number is already in use');
      } else {
        throw error;
      }
    }
  }
  async signToken(_id: ObjectId, userId: string): Promise<string> {
    const payload = {
      sub: _id,
      userId,
    };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15d',
      secret: this.config.get('JWT_SECRET'),
    });
    return token;
  }
}
