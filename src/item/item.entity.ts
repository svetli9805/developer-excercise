import Deal from 'src/deal/deal.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Item {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public price: number;

    @ManyToMany(() => Deal, deal => deal.items)
    @JoinTable()
    public deals: Deal [];
}