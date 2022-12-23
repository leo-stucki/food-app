import {AttributeService} from "./attribute.service";
import {MessageService} from "./message.service";

class MockMessageService {
  createSuccessMessage(message: string): void {}

  createErrorMessage(message: string): void {}
}

describe(AttributeService.name, () => {
  let service: AttributeService

  beforeEach(() => {
    service = new AttributeService(new MockMessageService() as MessageService);
  })

  it('should return attribute by id', (done) => {
    service.getAttributeById(1).subscribe((res) => {
      expect(res.name).toBe('zucker');
      expect(res.unit).toBe('mg');
      done();
    })
  })

  it('should create a new attribute and return a array of all attributes including the newly added', (done) => {
    service.createAttribute('magnesium', 'mg').subscribe((res) => {
      expect(res[0].name).toBe('zucker');
      expect(res[res.length-1].name).toBe('magnesium');
      done();
    })
  });
})
