import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import {Customer} from './Customer';
import {ProductDetails} from './ProductDetails';

@Entity({name: 'product_header'})
export class ProductHeader {

	@PrimaryGeneratedColumn()
	public ph_id: number;

	@Column()
	public group_id: number;

	@Column()
	public order_num: number;

	@ManyToOne(() => Customer, (key: Customer) => key.product_header)
	@JoinColumn({
		name: 'customer_fk',
		referencedColumnName: 'customer_id'
	})
	public customer: Customer;

	@Column()
	public customer_fk: number;

	@OneToMany(() => ProductDetails, (key: ProductDetails) => key.ph)
	public product_details: ProductDetails[];

	@Column()
	public status: string;

	@Column()
	public crafting_required: boolean;

	@Column({
		type: 'varchar',
		length: 2000,
		default: ''
	})
	public notes: string;

	@Column({
		default: ''
	})
	public reference_number: string;

	@CreateDateColumn()
	public created_on: Date;

	@Column()
	public created_by: string;

	@UpdateDateColumn()
	public updated_on: Date;

	@Column()
	public updated_by: string;
}
