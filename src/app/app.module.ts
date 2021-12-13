import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableFormComponent } from './observable-form/observable-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpclientExampleComponent } from './httpclient-example/httpclient-example.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ObserveComponent } from './observe/observe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatcherrorComponent } from './catcherror/catcherror.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbackComponent } from './callback/callback.component';
import { ExampleDialogComponent } from './example-dialog/example-dialog.component';
import { MyDialogComponent } from './comps/my-dialog/my-dialog.component';
import { AngularDynamicComponentsComponent } from './observable-MD/angular-dynamic-components/angular-dynamic-components.component';
import { ExampleComponent } from './example/example.component';
import { DialogModule } from './dialog/dialog.module';
import { AngularMaterialTableInlineOpsComponent } from './angular-material-table-inline-ops/angular-material-table-inline-ops.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { AngularDatatableComponent } from './angular-datatable/angular-datatable.component';
import { CdkTableModule } from '@angular/cdk/table';
import { DataTableComponent } from './data-table/data-table.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { PersonFormDialogModule } from './person-form-dialog/person-form-dialog.module';
import { PersonFormDialogComponent } from './person-form-dialog/person-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableFormComponent,
    HttpclientExampleComponent,
    HomeComponent,
    AboutComponent,
    ObserveComponent,
    CatcherrorComponent,
    PromisesComponent,
    CallbackComponent,
    ExampleDialogComponent,
    MyDialogComponent,
    AngularDynamicComponentsComponent,
    ExampleComponent,
    AngularMaterialTableInlineOpsComponent,
    DialogBoxComponent,
    AngularDatatableComponent,
    DataTableComponent,
    ConfirmationDialogComponent,
    PersonFormDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,

    BrowserAnimationsModule,
    DialogModule,
    MatTableModule,

    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatSelectModule,

    PersonFormDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [ConfirmationDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
