import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

// Декоратор @NgModule используется для создания функциональных модулей,
//а его свойства сообщают Angular о том, как должен использоваться модуль.
@NgModule({
	providers: [ProductRepository, StaticDataSource]
})

export class ModelModule { }
