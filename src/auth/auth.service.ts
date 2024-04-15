

import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/schemas/user.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  // Prisma.UserWhereUniqueInput
  async signin(dto: CreateAuthDto) {
    // find the user by email
    const user = await this.userModel.findOne({
      contactNumber: dto.contactNumber,
    });
    // if user does not exist throw error
    if (!user) {
      throw new ForbiddenException('Unotherised User');
    }
    //compare password
    const pwMatches = await argon.verify(user.password, dto.password);
    //if password incorrect throw an error
    if (!pwMatches) {
      throw new ForbiddenException('Credential incorrect');
    }
    // sand back the
    // delete user.hash;
    return this.signToken(user.id, user.contactNumber);
  }
  async signup(dto: CreateAuthDto) {
    const hash = await argon.hash(dto.password);
    console.log(dto);
    // post method creates new user and enter data to  user db
    try {
      const olduser = await this.userModel.findOne({
        contactNumber: dto.contactNumber,
      });
      if (!olduser) {
        const user = await new this.userModel({
          contactNumber: dto.contactNumber,
          password: hash,
          firstName: dto.firstName,
          lastName: dto.lastName,
        }).save();
        return this.signToken(user.id, user.contactNumber);
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
  async signToken(
    userId: ObjectId,
    contactNumber: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      contactNumber,
    };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '150m',
      secret: this.config.get('JWT_SECRET'),
    });
    return {
      access_token: token,
    };
  }
}