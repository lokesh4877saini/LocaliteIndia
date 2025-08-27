export interface UseProductListOptions<TRequest>{
    url:string;
    method?:"GET"|"POST"|"PUT"|"DELETE";
    limit?:number;
    dep?:unknown; // dependency to trigger refetch
    data?:TRequest;
}
export interface UseProductListResult<TRequest>{
    data:TRequest | null;
    loading:boolean;
    error:string | null;
}
