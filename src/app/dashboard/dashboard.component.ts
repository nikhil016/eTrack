import { Component, OnInit } from '@angular/core';
import { ColDef,ICellRendererParams,GridApi  } from 'ag-grid-community';
import { DataService } from '../data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private authService: DataService ,) {}
  // faCoffee = faCoffee;
  private gridApi!: GridApi<ColDef>;
  params !:any;
  columnDefs: ColDef[] = [
    { field: 'PartNumber' ,filter: true, floatingFilter: true },
    { field: 'PartDescription' ,filter: true, floatingFilter: true  },
    { field: 'Quantity' ,filter: true, floatingFilter: true },
    { field: 'ShipDate' ,filter: true, floatingFilter: true },
    { field: 'EstimatedDeliveryDate',filter: true, floatingFilter: true  },
    { 
      field: 'DownloadMSDS',
      filter: true,
      floatingFilter: true,
      cellRenderer: (params: ICellRendererParams) => {
        // put the value in bold
        return   params.value ;
      }
    },
    { field: 'Carrier' ,filter: true, floatingFilter: true },
    { field: 'TrackingNumber',filter: true, floatingFilter: true ,cellRenderer: (params: ICellRendererParams) => {
      // put the value in bold
      return   params.value ;
    } },
   
];


  rowData = [
    {
      PartNumber:'5200-0176      ',
      PartDescription:'FID Jet, universal fit, 0.011 inch ID',
      Quantity: 1,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-05',
      Carrier:'UPS',
      DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
      TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
    },
    {
      PartNumber:'G1314-60101',
      PartDescription:'Deuterium lamp w. RFID for VWD',
      Quantity: 2,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-03',
      Carrier:'FedEx',
        DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
     TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'5200-0176      ',
      PartDescription:'FID Jet, universal fit, 0.011 inch ID',
      Quantity: 1,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-05',
      Carrier:'UPS',
        DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
     TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'G1314-60101',
      PartDescription:'Deuterium lamp w. RFID for VWD',
      Quantity: 2,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-03',
      Carrier:'FedEx',
        DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
     TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'5200-0176      ',
      PartDescription:'FID Jet, universal fit, 0.011 inch ID',
      Quantity: 1,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-05',
      Carrier:'UPS',
      DownloadMSDS:' <a   class="btn btn-primary"href="https://docs.google.com/forms/d/e/1FAIpQLScX10zljJlC7RSz_9nThovsFJWayVxWPD-3Gekk31qD7pOhSQ/viewform?usp=sf_link" target="_blank">Download</a>',
       TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'G1314-60101',
      PartDescription:'Deuterium lamp w. RFID for VWD',
      Quantity: 2,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-03',
      Carrier:'FedEx',
      DownloadMSDS:' <a   class="btn btn-primary"href="https://docs.google.com/forms/d/e/1FAIpQLScX10zljJlC7RSz_9nThovsFJWayVxWPD-3Gekk31qD7pOhSQ/viewform?usp=sf_link" target="_blank">Download</a>',
       TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'5200-0176      ',
      PartDescription:'FID Jet, universal fit, 0.011 inch ID',
      Quantity: 1,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-05',
      Carrier:'UPS',
      DownloadMSDS:' <a   class="btn btn-primary"href="https://docs.google.com/forms/d/e/1FAIpQLScX10zljJlC7RSz_9nThovsFJWayVxWPD-3Gekk31qD7pOhSQ/viewform?usp=sf_link" target="_blank">Download</a>',
       TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'G1314-60101',
      PartDescription:'Deuterium lamp w. RFID for VWD',
      Quantity: 2,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-03',
      Carrier:'FedEx',
      DownloadMSDS:' <a   class="btn btn-primary"href="https://docs.google.com/forms/d/e/1FAIpQLScX10zljJlC7RSz_9nThovsFJWayVxWPD-3Gekk31qD7pOhSQ/viewform?usp=sf_link" target="_blank">Download</a>',
    
       TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'5200-0176      ',
      PartDescription:'FID Jet, universal fit, 0.011 inch ID',
      Quantity: 1,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-05',
      Carrier:'UPS',
        DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
     TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'G1314-60101',
      PartDescription:'Deuterium lamp w. RFID for VWD',
      Quantity: 2,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-03',
      Carrier:'FedEx',
        DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
    
      TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'5200-0176      ',
      PartDescription:'FID Jet, universal fit, 0.011 inch ID',
      Quantity: 1,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-05',
      Carrier:'UPS',
        DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
     TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'G1314-60101',
      PartDescription:'Deuterium lamp w. RFID for VWD',
      Quantity: 2,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-03',
      Carrier:'FedEx',
        DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
   
       TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'5200-0176      ',
      PartDescription:'FID Jet, universal fit, 0.011 inch ID',
      Quantity: 1,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-05',
      Carrier:'UPS',
        DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
     TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'G1314-60101',
      PartDescription:'Deuterium lamp w. RFID for VWD',
      Quantity: 2,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-03',
      Carrier:'FedEx',
        DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
   
       TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'5200-0176      ',
      PartDescription:'FID Jet, universal fit, 0.011 inch ID',
      Quantity: 1,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-05',
      Carrier:'UPS',
        DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
     TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },
    {
      PartNumber:'G1314-60101',
      PartDescription:'Deuterium lamp w. RFID for VWD',
      Quantity: 2,
      ShipDate:'2024-03-30',
      EstimatedDeliveryDate:'2024-04-03',
      Carrier:'FedEx',
        DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
   
       TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    },

    {
      PartNumber:'314914605',
      PartDescription:'Needle support insert, on column, 7693',
      Quantity: 1,
       ShipDate:'2024-03-30',
       EstimatedDeliveryDate:'2024-04-05',
       Carrier:'FedEx',
         DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
   
       TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
    },
    {
      PartNumber:'XYZ789',
      PartDescription:'Brake Pads',
      Quantity: 50,
       ShipDate:'2024-04-01',
       EstimatedDeliveryDate:'2024-04-07',
       Carrier:'FedEx',
         DownloadMSDS:' <a   class="btn btn-primary" href="https://drive.google.com/file/d/1rNOIZnnYnv-ReXDanm-BOqpbfTYFmcIz/view" target="_blank">Download</a>',
     TrackingNumber:'<a class="link-primary" href="https://www.fedex.com/fedextrack/?trknbr=396108180822&trkqual=12025~396108180822~FDEG" target="_blank">396108180822</a>'
  
    }
    // {
    //   PartNumber:'JKL456',
    //   PartDescription:'Air Filter',
    //   Quantity: 75,
    //    ShipDate:'2024-03-31',
    //    EstimatedDeliveryDate:'2024-04-06',
    //    Carrier:'DHL',
    //    TrackingNumber:'3Y65421'
    // },
    // {
    //   PartNumber:'MNO012',
    //   PartDescription:'Spark Plugs',
    //   Quantity: 200,
    //    ShipDate:'2024-03-29',
    //    EstimatedDeliveryDate:'2024-04-04',
    //    Carrier:'USPS',
    //    TrackingNumber:'4A24680'
    // },
    // {
    //   PartNumber:'ABC123',
    //   PartDescription:'Engine Oil',
    //   Quantity: 100,
    //   ShipDate:'2024-03-30',
    //   EstimatedDeliveryDate:'2024-04-05',
    //   Carrier:'UPS',
    //   TrackingNumber:'1Z12345'
    // },
    // {
    //   PartNumber:'DEF789',
    //   PartDescription:'Transmission Fluid',
    //   Quantity: 150,
    //    ShipDate:'2024-04-02',
    //    EstimatedDeliveryDate:'2024-04-08',
    //    Carrier:'UPS',
    //    TrackingNumber:'5B13579'
    // },
    // {
    //   PartNumber:'JKL456',
    //   PartDescription:'Air Filter',
    //   Quantity: 75,
    //    ShipDate:'2024-03-31',
    //    EstimatedDeliveryDate:'2024-04-06',
    //    Carrier:'DHL',
    //    TrackingNumber:'3Y65421'
    // },
    // {
    //   PartNumber:'ABC123',
    //   PartDescription:'Engine Oil',
    //   Quantity: 100,
    //   ShipDate:'2024-03-30',
    //   EstimatedDeliveryDate:'2024-04-05',
    //   Carrier:'UPS',
    //   TrackingNumber:'1Z12345'
    // },
    // {
    //   PartNumber:'JKL456',
    //   PartDescription:'Air Filter',
    //   Quantity: 75,
    //    ShipDate:'2024-03-31',
    //    EstimatedDeliveryDate:'2024-04-06',
    //    Carrier:'DHL',
    //    TrackingNumber:'3Y65421'
    // },
    // {
    //   PartNumber:'MNO012',
    //   PartDescription:'Spark Plugs',
    //   Quantity: 200,
    //    ShipDate:'2024-03-29',
    //    EstimatedDeliveryDate:'2024-04-04',
    //    Carrier:'USPS',
    //    TrackingNumber:'4A24680'
    // },
    // {
    //   PartNumber:'ABC123',
    //   PartDescription:'Engine Oil',
    //   Quantity: 100,
    //   ShipDate:'2024-03-30',
    //   EstimatedDeliveryDate:'2024-04-05',
    //   Carrier:'UPS',
    //   TrackingNumber:'1Z12345'
    // },
    // {
    //   PartNumber:'DEF789',
    //   PartDescription:'Transmission Fluid',
    //   Quantity: 150,
    //    ShipDate:'2024-04-02',
    //    EstimatedDeliveryDate:'2024-04-08',
    //    Carrier:'UPS',
    //    TrackingNumber:'5B13579'
    // },
    // {
    //   PartNumber:'JKL456',
    //   PartDescription:'Air Filter',
    //   Quantity: 75,
    //    ShipDate:'2024-03-31',
    //    EstimatedDeliveryDate:'2024-04-06',
    //    Carrier:'DHL',
    //    TrackingNumber:'3Y65421'
    // },
    // {
    //   PartNumber:'ABC123',
    //   PartDescription:'Engine Oil',
    //   Quantity: 100,
    //   ShipDate:'2024-03-30',
    //   EstimatedDeliveryDate:'2024-04-05',
    //   Carrier:'https://www.fedex.com/fedextrack/no-results-found?trknbr=123455666',
    //   TrackingNumber:'1Z12345'
    // }
      ];
      
      
  ngOnInit(): void {
    // this.authService.setPageTitle('New Page Title 222' );
    // getPageTitle
  }  
  ExportToExcel()
  {
    this.gridApi.exportDataAsExcel();
    
  }  
}
