import Item from 'src/item/item.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Deal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public type: string;

  @ManyToMany(()=> Item, Item => Item.deals)
  public items: Item[];
  
}