import { Observable } from 'tns-core-modules/data/observable';
import 'nativescript-plugin-facebook-sdk';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();
    this.message = "Hello World";
  }
}
