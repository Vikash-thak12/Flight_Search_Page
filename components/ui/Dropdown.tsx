"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

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

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]

export function ComboboxDemo({ where, val }: { where: string, val: string }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] items-center justify-between py-8"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="aim">
                        <path fill="#000" fill-rule="evenodd" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" clip-rule="evenodd"></path>
                        <path fill="#000" fill-rule="evenodd" d="M13 1a1 1 0 1 0-2 0v1.05A10.003 10.003 0 0 0 2.05 11H1a1 1 0 1 0 0 2h1.05A10.003 10.003 0 0 0 11 21.95V23a1 1 0 1 0 2 0v-1.05A10.003 10.003 0 0 0 21.95 13H23a1 1 0 1 0 0-2h-1.05A10.003 10.003 0 0 0 13 2.05V1Zm-1 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" clip-rule="evenodd"></path>
                    </svg>
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : `${where}`}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={`${val}`} />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
