"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { airportsData } from "@/data"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface Airport {
    city: string;
    code: string;
    name: string;
}

export function ComboboxDemo({ where, val, onChange }: { where: string, val: string, onChange: (value: Airport | null) => void }) {
    const [open, setOpen] = React.useState(false)
    const [selectedAirport, setSelectedAirport] = React.useState<Airport | null>(null)

    const handleSelect = (airport: Airport) => {
        // Toggle selection logic
        if (selectedAirport && selectedAirport.code === airport.code) {
            onChange(null);
        } else {
            setSelectedAirport(airport); 
            onChange(airport);
        }
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[300px] items-center justify-between py-8 px-4"
                    onClick={() => setOpen(!open)}
                >
                    {selectedAirport ? (
                        <div className="flex flex-col items-start w-[95%]">
                            <span>{selectedAirport.city}</span>
                            <span className="w-full flex text-sm text-muted-foreground overflow-hidden">
                                {selectedAirport.name}
                            </span>
                        </div>
                    ) : `${where}`}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={`${val}`} />
                    <CommandList>
                        <CommandEmpty>No Such Airports Found...</CommandEmpty>
                        <CommandGroup>
                            {airportsData.map((airport) => (
                                <CommandItem
                                    key={airport.code} // Use a unique identifier
                                    value={JSON.stringify(airport)} // Store the entire airport object as a JSON string
                                    onSelect={() => handleSelect(airport)} // Pass the airport object to the handler
                                >
                                    {airport.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
