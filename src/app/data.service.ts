import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users = [
    { 
      email: 'xyz@yahoo.com', 
      sonumber: '314914605', 
      ponumber: '5200-0176', 
      Part_No: '5200-0176', 
      Part_Description: 'FID Jet, universal fit, 0.011 inch ID', 
      Quantity: 1, 
      Ship_Date: '24/01/2024', 
      Estimated_Delivery_Date: '24/08/2024', 
      Tracking_No: 'FedEx396108180822'
    },
    { 
      email: 'xyz@gmail.com', 
      sonumber: '314914605', 
      ponumber: 'G1314-60101', 
      Part_No: 'G1314-60101', 
      Part_Description: 'Deuterium lamp w. RFID for VWD', 
      Quantity: 1, 
      Ship_Date: '24/08/2024', 
      Estimated_Delivery_Date: '24/08/2024', 
      Tracking_No: 'FedEx396108180822'
    },
      {
          email: "abc@gmail.com",
          ponumber: "ALS533786",
          sonumber: "314914605",
          Part_No: "5200-0176",
          Part_Description: "FID Jet, universal fit, 0.011 inch ID",
          Quantity: "1",
          Ship_Date: "24/01/2024",
          Eatimated_Delivery_Date: "24/08/2024",
          Tracking_No : "FedEx396108180822 "
      },
      {
          email: "abc@gmail.com",
          ponumber: "ALS533787",
          sonumber: "314914605",
          Part_No: "G1314-60101",
          Part_Description: "Deuterium lamp w. RFID for VWD",
          Quantity: "1",
          Ship_Date: "24/08/2024",
          Eatimated_Delivery_Date: "24/08/2024",
          Tracking_No : "FedEx396108180822 "
            
      },
      {
          email: "abc@gmail.com",
          ponumber: "ALS533788",
          sonumber: "314914605",
          Part_No: "G4513-40529",
          Part_Description: "Needle support insert, on column, 7693",
          Quantity: "1",
          Ship_Date: "24/07/2024",
          Eatimated_Delivery_Date: "24/08/2024",
          Tracking_No : "FedEx396108180822 "
            
      },
      {
          email: "abc@gmail.com",
          ponumber: "ALS533789",
          sonumber: "314914605",
          Part_No: "G1314-60100",
          Part_Description: "D2 Lamp L6903 with Box",
          Quantity: "1",
          Ship_Date: "24/07/2024",
          Eatimated_Delivery_Date: "24/08/2024",
          Tracking_No : "FedEx396108180822 "
            
      },
      {
          email: "abc@gmail.com",
          ponumber: "ALS533790",
          sonumber: "314914605",
          Part_No: "G4513-40525",
          Part_Description: "Needle support insert, standard, 7693",
          Quantity: "1",
          Ship_Date: "24/07/2024",
          Eatimated_Delivery_Date: "24/08/2024",
          Tracking_No : "FedEx396108180822 "
            
      },
      {
          email: "abc@gmail.com",
          ponumber: "ALS533791",
          sonumber: "314914605",
          Part_No: "5080-8773",
          Part_Description: "Ferrule, 1.0mm Graphite 0.53 col 10/PK",
          Quantity: "1",
          Ship_Date: "24/07/2024",
          Eatimated_Delivery_Date: "24/08/2024",
          Tracking_No : "FedEx396108180822 "
            
      },
      {
          email: "abc@gmail.com",
          ponumber: "ALS533792",
          sonumber: "314914605",
          Part_No: "5181-1270",
          Part_Description: null,
          Quantity: "1",
          Ship_Date: "24/07/2024",
          Eatimated_Delivery_Date: "24/08/2024",
          Tracking_No : "FedEx396108180822 "
            
      },
      {
          email: "abc@gmail.com",
          ponumber: "ALS533793",
          sonumber: "314914605",
          Part_No: "822975-902",
          Part_Description: "SB-C18 4.6x50mm 1.8um",
          Quantity: "1",
          Ship_Date: "24/07/2024",
          Eatimated_Delivery_Date: "24/08/2024",
          Tracking_No : "FedEx396108180822 "
            
      },
      {
          email: "abc@gmail.com",
          ponumber: "ALS533794",
          sonumber: "314914605",
          Part_No: "9301-0985",
          Part_Description: "FID cleaning kit",
          Quantity: "1",
          Ship_Date: "24/07/2024",
          Eatimated_Delivery_Date: "24/08/2024",
          Tracking_No : "FedEx396108180822 "
      }
];   
  
  constructor(private http: HttpClient) {
   }



  authenticate(email: string, ponumber: string, sonumber: string): boolean {
    const user1 = this.users.find(u => u.email === email && u.sonumber === sonumber);
    const user2 = this.users.find(u => u.email === email && u.ponumber === ponumber);
    const arrayLength: number = this.users.length;
    const arrayLength1: number = this.users.length;
    if ((user1 !== undefined)|| ( user2 !== undefined ))
      return true;
    else
      return false;
  }
 

}
