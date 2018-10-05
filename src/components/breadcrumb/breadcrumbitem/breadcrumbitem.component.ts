import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { BreadCrumbItem } from "../../../models/breadCrumbItem";
import { BreadCrumbItemOption, OPTION_NEW_FOLDER, OPTION_UPLOAD_FILES } from "../../../models/breadCrumbItemOption";
import { MatButton } from "@angular/material/button";

@Component({
    selector: "breadcrumbitem",
    templateUrl: "./breadcrumbitem.component.html",
    styleUrls: ["./breadcrumbitem.component.css"]
})
export class BreadCrumbItemComponent {

    @Input()
    model: BreadCrumbItem;

    @Output()
    onSelected: EventEmitter<BreadCrumbItem> = new EventEmitter<BreadCrumbItem>();

    @Output()
    onSelectedOption: EventEmitter<BreadCrumbItemOption> = new EventEmitter<BreadCrumbItemOption>();

    newFolder() {
        this.onSelectedOption.emit({ Name: "Nueva carpeta", Option: OPTION_NEW_FOLDER, Data: null });
    }

    select() {
        this.onSelected.emit(this.model);
    }

    uploadFiles($event) {
        this.onSelectedOption.emit({ Name: "Subir archivos", Option: OPTION_UPLOAD_FILES, Data: $event.target.files })
    }



}