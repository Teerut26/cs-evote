import React from "react";

interface Props {}

const CardLogin: React.FC<Props> = () => {
    return (
        <>
            <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ยินดีต้อนรับสู่ระบบ Evote
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
            </div>
        </>
    );
};

export default CardLogin;
