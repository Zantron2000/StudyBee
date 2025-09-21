"use client";
import { useState } from "react";

export default function ActivitySettings({ settings: initialSettings, confirmSettings, closeSettings }) {
    const [settings, setSettings] = useState(initialSettings);

    const updateSetting = (settingIdx, option) => {
        const newSettings = [...settings];
        newSettings[settingIdx].current = option;

        setSettings(newSettings);
    }

    return (
        <div
            className="absolute top-0 left-0 min-w-screen min-h-screen bg-white py-10"
        >
            <form className="flex flex-col items-center w-full">
                <div className="flex flex-col w-1/3 mb-10">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Settings</h2>
                        <button
                            className="cursor-pointer p-2 rounded-lg hover:bg-button-tertiary-hover bg-button-tertiary text-button-tertiary-foreground-passive"
                            onClick={(e) => { e.preventDefault(); closeSettings(); }}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="18" 
                                height="18" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div>
                        {settings.map((setting, idx) => (
                            <div key={idx} className="mb-6">
                                <h3 className="text-lg mb-2">{setting.label}</h3>
                                <div className="inline-block border-1 border-highlight rounded-lg">
                                    {setting.options.map((option, oidx) => (
                                        <button
                                            key={oidx}
                                            className={`
                                                p-2 font-semibold cursor-pointer
                                                ${option === setting.current ? 'bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover' : 'bg-button-secondary text-button-secondary-foreground hover:bg-button-secondary-hover'}
                                                ${oidx === 0 ? 'rounded-l-md' : ''}
                                                ${oidx === setting.options.length - 1 ? 'rounded-r-md' : ''}
                                            `}
                                            onClick={(e) => { e.preventDefault(); updateSetting(idx, option) }}
                                        >
                                            {option[0].toUpperCase() + option.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button
                            className="font-semibold cursor-pointer w-full bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover px-4 py-2 rounded-lg mr-4"
                            onClick={(e) => { e.preventDefault(); confirmSettings(settings); }}
                        >
                            Apply Settings
                        </button>
                        <p className="text-red-500">This will reset all progress</p>
                    </div>
                </div>
            </form>
        </div>
    );
}