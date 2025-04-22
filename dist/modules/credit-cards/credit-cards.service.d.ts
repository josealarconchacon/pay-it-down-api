import { Repository } from "typeorm";
import { CreditCard } from "./entities/credit-card.entity";
import { CreateCreditCardDto } from "./dto/create-credit-card.dto";
import { UpdateCreditCardDto } from "./dto/update-credit-card.dto";
export declare class CreditCardsService {
    private creditCardRepository;
    constructor(creditCardRepository: Repository<CreditCard>);
    create(createCreditCardDto: CreateCreditCardDto): Promise<CreditCard>;
    findAll(): Promise<CreditCard[]>;
    findOne(id: string): Promise<CreditCard>;
    update(id: string, updateCreditCardDto: UpdateCreditCardDto): Promise<CreditCard>;
    remove(id: string): Promise<void>;
}
