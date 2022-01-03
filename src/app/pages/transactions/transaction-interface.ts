export interface Transaction {
  id: number;
  car: number;
  client: number;
  parts_price: string;
  workmanship_price: string;
  paid_parts_price: number;
  paid_workmanship_price: number;
  time: string;
  parts_discount: number;
  workmanship_discount: number;
}
