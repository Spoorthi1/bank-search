import { BankModule } from './bank.module';

describe('BankModule', () => {
  let bankModule: BankModule;

  beforeEach(() => {
    bankModule = new BankModule();
  });

  it('should create an instance', () => {
    expect(bankModule).toBeTruthy();
  });
});
