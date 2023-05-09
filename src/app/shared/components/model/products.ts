

export interface Iproduct {
 
        pname: string;
        pid: number;
        pstatus: Tpstatus;
    }
    

    export type Tpstatus = "In progress" | "dispatched" | "delivered";