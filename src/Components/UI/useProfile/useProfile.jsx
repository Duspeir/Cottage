import { useState } from "react";
import React from "react";

const useProfile = (prop) => {
    const [prof, setProf] = useState(1)
    const increment = React.useCallback(() => {
        setProf(prop)
    })
    return {prof, increment}
}

export default useProfile;