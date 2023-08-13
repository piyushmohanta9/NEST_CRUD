import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/schema/user.schema";
import { CreateUserDto } from './dto/create-user.dto';


@Injectable ({})

export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
      }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async delete(dto): Promise<User | null> {
        const filter = { username: dto.username };
    
        try {
            const deleteUser = await this.userModel.deleteOne(filter);
    
            if (deleteUser.deletedCount > 0) {
                // The user was deleted successfully
                return null; // You can return an appropriate response here
            } else {
                // No user was deleted (user not found)
                return null; // You can return an appropriate response here
            }
        } catch (error) {
            // Handle the error if the deletion operation fails
            throw new Error("Failed to delete user.");
        }
    }

    async update(dto): Promise<User | null> {
        const filter = { username: dto.username };
        const update = { name: dto.name, password: dto.password, email: dto.email, phone: dto.phone };
    
        try {
            const updatedUser = await this.userModel.findOneAndUpdate(filter, update, { new: true });
    
            if (updatedUser) {
                return updatedUser;
            } else {
                return null; // User not found
            }
        } catch (error) {
            // Handle the error if the update operation fails
            throw new Error("Failed to update user.");
        }
    }
    // return this.userModel.updateOne({username: dto.username}, {username: dto.username, name: dto.username, password: dto.password, email: dto.email, phone: dto.phone});
    


    // login(){
    //     return('Im logged in');
    // }

    // signup(){
    //     return('Im signed in');
    // }

    
}