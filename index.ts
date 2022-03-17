
interface ISender {
    Send(message: string): boolean;
}

class EmailSender implements ISender {
    Send(message: string): boolean {
        console.log(`I'm Sending an email with the message "${message}"`);
        return true;
    }
}

class SMSSender implements ISender {
    Send(message: string): boolean {
        console.log(`I'm Sending a text with the message "${message}"`);
        return true;
    }
}

const emailSender = new EmailSender();
const smsSender = new SMSSender();

emailSender.Send('Hello Email');
smsSender.Send('Hello SMS');
