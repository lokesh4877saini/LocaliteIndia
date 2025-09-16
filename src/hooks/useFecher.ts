'use client'
import { UseProductListOptions, UseProductListResult } from '../types/hookTypes';
import { useEffect, useState } from "react";
const preFix = `${process.env.NEXT_PUBLIC_API_ALL_PRODUCTS!}`;
function useFetcher<TResponse = any, TRequest = any>({
    url,
    method = "POST",
    limit,
    dep,
    data: requestData,
}: UseProductListOptions<TRequest>): UseProductListResult<TResponse> {
    const [data, setData] = useState<TResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${preFix}${url}`, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: method !== "GET" ? JSON.stringify(requestData) : null,
                    signal: controller.signal,
                });
                console.log(response);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = (await response.json()) as TResponse;
                setData(json);
            } catch (err: any) {
                if (err.name !== "AbortError") {
                    setError(err.message || "Something went wrong");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchData();
        return () => controller.abort();
    },[url,method,limit,dep,requestData]);
    return {data,loading,error};
}
export {useFetcher};