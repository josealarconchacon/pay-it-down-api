import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreditCard } from "./entities/credit-card.entity";
import { CreateCreditCardDto } from "./dto/create-credit-card.dto";
import { UpdateCreditCardDto } from "./dto/update-credit-card.dto";

@Injectable()
export class CreditCardsService {
  constructor(
    @InjectRepository(CreditCard)
    private creditCardRepository: Repository<CreditCard>
  ) {}

  async create(createCreditCardDto: CreateCreditCardDto): Promise<CreditCard> {
    const creditCard = this.creditCardRepository.create(createCreditCardDto);
    return await this.creditCardRepository.save(creditCard);
  }

  async findAll(): Promise<CreditCard[]> {
    return await this.creditCardRepository.find({
      relations: ["extraPayments"],
    });
  }

  async findOne(id: string): Promise<CreditCard> {
    const creditCard = await this.creditCardRepository.findOne({
      where: { id },
      relations: ["extraPayments"],
    });

    if (!creditCard) {
      throw new NotFoundException(`Credit card with ID "${id}" not found`);
    }

    return creditCard;
  }

  async update(
    id: string,
    updateCreditCardDto: UpdateCreditCardDto
  ): Promise<CreditCard> {
    const creditCard = await this.findOne(id);
    Object.assign(creditCard, updateCreditCardDto);
    return await this.creditCardRepository.save(creditCard);
  }

  async remove(id: string): Promise<void> {
    const result = await this.creditCardRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Credit card with ID "${id}" not found`);
    }
  }
}
