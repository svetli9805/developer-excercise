import { Repository } from "typeorm";
import Item from "./item.entity";
import { InjectRepository } from '@nestjs/typeorm';

export default class ItemRepository {
    constructor(@InjectRepository(Item) private readonly itemRepository: Repository<Item>) {
    }

    public async getAllItems(): Promise<Item[]> {
        return this.itemRepository.find();
    }

}
//s