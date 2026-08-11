"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, X } from "lucide-react";
import { forwardRef, type ButtonHTMLAttributes, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("ui-button", { variants: { variant: { primary: "ui-button-primary", outline: "ui-button-outline", ghost: "ui-button-ghost" }, size: { default: "ui-button-default", sm: "ui-button-sm", icon: "ui-button-icon" } }, defaultVariants: { variant: "primary", size: "default" } });

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild, ...props }, ref) => { const Component = asChild ? Slot : "button"; return <Component ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}/>; });
Button.displayName = "Button";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn("ui-card", className)} {...props}/>; }
export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) { return <span className={cn("ui-badge", className)} {...props}/>; }

export const Tabs = TabsPrimitive.Root;
export const TabsList = forwardRef<HTMLDivElement, TabsPrimitive.TabsListProps>(({ className, ...props }, ref) => <TabsPrimitive.List ref={ref} className={cn("ui-tabs-list", className)} {...props}/>);
export const TabsTrigger = forwardRef<HTMLButtonElement, TabsPrimitive.TabsTriggerProps>(({ className, ...props }, ref) => <TabsPrimitive.Trigger ref={ref} className={cn("ui-tabs-trigger", className)} {...props}/>);
export const TabsContent = forwardRef<HTMLDivElement, TabsPrimitive.TabsContentProps>(({ className, ...props }, ref) => <TabsPrimitive.Content ref={ref} className={cn("ui-tabs-content", className)} {...props}/>);

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = forwardRef<HTMLDivElement, AccordionPrimitive.AccordionItemProps>(({ className, ...props }, ref) => <AccordionPrimitive.Item ref={ref} className={cn("ui-accordion-item", className)} {...props}/>);
export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionPrimitive.AccordionTriggerProps>(({ className, children, ...props }, ref) => <AccordionPrimitive.Header><AccordionPrimitive.Trigger ref={ref} className={cn("ui-accordion-trigger", className)} {...props}>{children}<ChevronDown size={16}/></AccordionPrimitive.Trigger></AccordionPrimitive.Header>);
export const AccordionContent = forwardRef<HTMLDivElement, AccordionPrimitive.AccordionContentProps>(({ className, ...props }, ref) => <AccordionPrimitive.Content ref={ref} className={cn("ui-accordion-content", className)} {...props}/>);

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export function DialogContent({ className, children, ...props }: DialogPrimitive.DialogContentProps) { return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="ui-dialog-overlay"/><DialogPrimitive.Content className={cn("ui-dialog-content", className)} {...props}>{children}<DialogPrimitive.Close className="ui-dialog-close" aria-label="Close"><X size={16}/></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>; }
export const DialogTitle = DialogPrimitive.Title;

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export function TooltipContent({ className, ...props }: TooltipPrimitive.TooltipContentProps) { return <TooltipPrimitive.Portal><TooltipPrimitive.Content sideOffset={8} className={cn("ui-tooltip", className)} {...props}/></TooltipPrimitive.Portal>; }
