import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import Keyboard from "simple-keyboard";

@Component({
  standalone: true,
  selector: 'page-new-container',
  encapsulation: ViewEncapsulation.None,
  template: `
    <input (input)="onInputChange($event)" class="input" value={{value}}
           placeholder="Tap on the virtual keyboard to start"/>
    <div class="simple-keyboard"></div>
  `
})
export class NewContainerPage implements AfterViewInit {
  value = "";
  keyboard!: Keyboard;

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };
}
