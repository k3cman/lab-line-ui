import {Component} from '@angular/core';

@Component({
  selector: 'app-custom-icon',
  standalone: true,
  imports: [],
  template: `
    <svg width="40px" height="40px" viewBox="0 0 24 24" stroke-width="1.5" fill="none"
         xmlns="http://www.w3.org/2000/svg" color="white">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.0696 5.22622L14.4121 10.189C15.3193 11.2258 15.3193 12.7741 14.4121 13.8108L10.0697 18.7736C8.97402 20.0258 7.0261 20.0258 5.93047 18.7736L1.58802 13.8108C0.680789 12.7741 0.680784 11.2258 1.588 10.189L5.93047 5.22623C7.0261 3.97407 8.97401 3.97407 10.0696 5.22622Z"
            fill="white"></path>
      <path d="M13 19L17.8844 13.3016C18.5263 12.5526 18.5263 11.4474 17.8844 10.6984L13 5" stroke="white"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M17 19L21.8844 13.3016C22.5263 12.5526 22.5263 11.4474 21.8844 10.6984L17 5" stroke="white"
            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `,
})
export class CustomIconComponent {

}
