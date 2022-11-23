import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(

    @InjectRepository(User) private userRepository: Repository<User> 

  ){}
  async addNewUser(req,res) {
    const data = req.body
    const newData = await this.userRepository.create(data)
    this.userRepository.save(newData)
    res.send({
      status:200,
      message: "data added successfully"
    })
  }

  async getAllUsers(res) {
    const allUser = await this.userRepository.find()
    res.send({
      status:201,
      data: allUser
    })
  }

  async getOneUserById(req, res) {
    const id = req.params.id
    const currentUser = await this.userRepository.find({
      where:{
        id
      }
    })
    console.log('====================================');
    console.log("ggggggggggggggggggggg");
    console.log('====================================');
    res.send({
      status: 201,
      data: currentUser
    })

  }

  async updateUserById(req, res) {
    const dataToUodate = req.body
    const findUserToUpdateDataById = await this.userRepository.update({
      id:req.params.id
    },dataToUodate)
    res.send({
      status:201,
      message : "data is updated successfully"
    })
  }

  async removeUserById(req, res) {
    await this.userRepository.delete({id:req.params.id})
    res.send({
      status:201,
      message: "User's data deleted successfully"
    })
  }
}
