import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseLayoutComponent } from "./layouts/base-layout/base-layout.component";

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        loadChildren: () =>
            import('./modules/sixth/sixth.module')
                .then(m => m.SixthModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }