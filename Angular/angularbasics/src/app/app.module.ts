import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { TestComponent } from './test/test.component';
import { TestnewComponent } from './testnew/testnew.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { SimpleinterestComponent } from './simpleinterest/simpleinterest.component';
import { SimplecalculatorComponent } from './simplecalculator/simplecalculator.component';
import { SwitchdemoComponent } from './components/switchdemo/switchdemo.component';
import { StyledemoComponent } from './components/styledemo/styledemo.component';
import { ClassdemoComponent } from './components/classdemo/classdemo.component';
import { TemplateformComponent} from './components/templateform/templateform.component';
import { EmployeetemplateformComponent } from './components/employeetemplateform/employeetemplateform.component';
import { CoronaComponent } from './components/corona/corona.component';
import {HttpClientModule} from '@angular/common/http';
import { TodosComponent } from './components/todos/todos.component';
import { PostsComponent } from './components/posts/posts.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CompanyComponent } from './components/company/company.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ExponentialstrengthPipe } from './pipes/exponentialstrength.pipe';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
  
    AppComponent,
    DatatypesComponent,
    TestComponent,
    TestnewComponent,
    CustomerComponent,
    EmployeeComponent,
    DatabindingComponent,
    SimpleinterestComponent,
    SimplecalculatorComponent,
    SwitchdemoComponent,
    StyledemoComponent,
    ClassdemoComponent,
    TemplateformComponent,
    EmployeetemplateformComponent,
    CoronaComponent,
    TodosComponent,
    PostsComponent,
    ParentComponent,
    ChildComponent,
    CompanyComponent,
    CompaniesComponent,
    PipesComponent,
    ExponentialstrengthPipe,
    ReactiveFormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
