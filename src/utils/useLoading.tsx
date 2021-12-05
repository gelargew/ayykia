import { useState } from "react";

export default function useLoading({loading=false}) {
    const [isLoading, setIsLoading] = useState(loading)
}