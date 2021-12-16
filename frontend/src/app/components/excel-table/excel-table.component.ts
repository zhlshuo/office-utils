import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';

@Component({
    selector: 'excel-table',
    templateUrl: './excel-table.component.html',
    styleUrls: ['./excel-table.component.scss'],
  })
  export class ExcelTableComponent implements OnInit {

    ngOnInit() {
    }


    
    // isEmptyDrop = true;
    // isExcelDrop = true;

    // origExcelData: any[][] = [
    //     ['Data: 2018/10/26'],
    //     ['Data: 2018/10/26'],
    //     ['Data: 2018/10/26'],
    // ];
    
    // refExcelData: Array<any> = [];
    // excelDataEncodeToJson: any;
    // excelTransformNum: string[] = [];

    // sheetJsExcelName = 'null.xlsx';

    // sheetCellRange: any;
    // localwSheet: any;
    // sheetMaxRow: any;
    // sheetBufferRender: any;
    // localWorkBook: any;
    // sheetNameForTab: Array<string> = ['excel tab 1', 'excel tab 2'];
    // totalPage = this.sheetNameForTab.length;
    // selectDefault: any;

    // dropExcelOnChance(targetInput: Array<File>) {
    //     this.sheetJsExcelName = targetInput[0].name;
    //     if (targetInput.length !== 1) {
    //         throw new Error('Cannot use multiple files 觸發條跳視窗');
    //         /* TODO: 觸發條跳視窗 */
    //     }
        
    //     const reader: FileReader = new FileReader();
    //     this.readerExcel(reader);
    //     reader.readAsArrayBuffer(targetInput[0]);
    //     this.sheetBufferRender = targetInput[0];
    //     this.isEmptyDrop = false;
    //     this.isExcelDrop = true;
    // }
    
    // transform(value: number): string {
    //     return (value >= 26 ? this.transform(((value / 26) >> 0) - 1) : '') + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[value % 26 >> 0];
    // }

    // readerExcel(reader: any, index = 0) {
    //     /* reset array */
    //     this.origExcelData = [];
    //     reader.onload = (e: any) => {
    //       const data: string = e.target.result;
    //       const wBook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });
    //       this.localWorkBook = wBook;
    //       const wsname: string = wBook.SheetNames[index];
    //       this.sheetNameForTab = wBook.SheetNames;
    //       this.totalPage = this.sheetNameForTab.length;
    //       this.selectDefault = this.sheetNameForTab[index];
    //       const wSheet: XLSX.WorkSheet = wBook.Sheets[wsname];
    //       this.localwSheet = wSheet;
    //       this.sheetCellRange = XLSX.utils.decode_range(wSheet['!ref']!);
    //       this.sheetMaxRow = this.sheetCellRange.e.r;
    //       this.origExcelData = <any[][]>XLSX.utils.sheet_to_json(wSheet, {
    //         header: 1,
    //         range: wSheet['!ref'],
    //         raw: true,
    //       });
    //       this.refExcelData = this.origExcelData.slice(1).map(value => Object.assign([], value));
    //       /* 抓 range & 清除占存 A->Z */
    //       this.excelTransformNum = [];
    //       for (let idx = 0; idx <= this.sheetCellRange.e.c; idx++) {
    //         this.excelTransformNum[idx] = this.transform(idx);
    //       }
    //       /* 加入 order 的佔位(#) */
    //       this.refExcelData.map(x => x.unshift('#'));
    //       this.excelTransformNum.unshift('order');
    //       /* 合併成JSON */
    //       this.excelDataEncodeToJson = this.refExcelData.slice(0).map(item =>
    //         item.reduce((obj: any, val: any, i: number) => {
    //           obj[this.excelTransformNum[i]] = val;
    //           return obj;
    //         }, {}),
    //       );
    //     };
    //   }
  }