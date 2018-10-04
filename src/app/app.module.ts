import { AppComponent } from './app.component';

export function initGapi(gapiSession: GapiSession) { 
  return () => gapiSession.initClient();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
  ],
  imports: [
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
