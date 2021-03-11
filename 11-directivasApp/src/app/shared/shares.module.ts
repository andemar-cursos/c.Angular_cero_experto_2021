import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directive/error-msg.directive';

@NgModule({
  declarations: [ErrorMsgDirective],
  exports: [ErrorMsgDirective],
})
export class SharesModule {}
