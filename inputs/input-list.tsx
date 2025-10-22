// SPDX-FileCopyrightText: 2025 Istituto Nazionale di Fisica Nucleare
//
// SPDX-License-Identifier: EUPL-1.2

'use client';

import { useRef, useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { Input } from '@/components/inputs';
import { Button } from '@/components/buttons';
import { Label } from '@/components/form';

interface InputListProps {
	id?: string;
	originalItems: string[];
	name?: string;
	type?: string;
	placeholder?: string;
	label?: string;
	required?: boolean;
	onChange?: (items: string[]) => void;
}

export function InputList(props: Readonly<InputListProps>) {
	const {
		id,
		originalItems,
		name,
		placeholder,
		type,
		label,
		required,
		onChange,
	} = props;
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState('');
	const [items, setItems] = useState(originalItems ?? []);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [isRequired, setIsRequired] = useState(required ?? false);

	const addItem = (item: string) => {
		const { value, error } = sanitizeValue(item);
		if (error) {
			setErrorMessage(error);
			return;
		}

		if (!items.find((i) => i === value)) {
			const newItems = [...items, value];
			onChange?.(newItems);
			setItems(newItems);
			setIsRequired(false);
			if (errorMessage) {
				setErrorMessage(null);
			}
		} else {
			console.warn('item already present');
			setErrorMessage(`Item "${item}" is already present.`);
		}
	};
	const removeItem = (index: number) => {
		const newItems = items.toSpliced(index, 1);
		onChange?.(newItems);
		setItems(newItems);

		if (newItems.length === 0 && required) {
			setIsRequired(true);
		}
	};

	const checkValidity = (newItem: string, index: number) => {
		const trimmedItem = newItem.trim();

		// Check for empty values
		if (trimmedItem.length === 0) {
			removeItem(index);
			setErrorMessage(`Can't insert empty values.`);
			return;
		}

		// Check for duplicates (excluding the current index)
		const isDuplicate = items.some(
			(existing, i) => existing === trimmedItem && i !== index
		);
		if (isDuplicate) {
			removeItem(index);
			if (inputRef.current) {
				inputRef.current.value = trimmedItem;
				setValue(trimmedItem);
			}
			setErrorMessage(`Item "${trimmedItem}" is already present.`);
			return;
		}

		// Update the item if it changed
		if (items[index] !== trimmedItem) {
			const updated = [...items];
			updated[index] = trimmedItem;
			setItems(updated);
		}

		// Clear any previous error message
		setErrorMessage('');
	};

	const listItems = items.map((item, index) => (
		<li key={item} className='mt-1 flex flex-row items-center'>
			<button
				type='button'
				onClick={() => removeItem(index)}
				className='bg-secondary-100 hover:bg-danger hover:text-secondary dark:bg-secondary/60 dark:text-danger/80 w-5 rounded-full cursor-pointer'
			>
				<XMarkIcon />
			</button>
			<input
				className='w-full bg-transparent iam-input border-0 hover:not-focus:bg-infn/3 px-3'
				defaultValue={item}
				contentEditable={false}
				onBlur={(e) => checkValidity(e.target.value, index)}
			/>
		</li>
	));

	const sanitizeValue = (value: string) => {
		if (type == 'url') {
			try {
				new URL(value);
			} catch (err) {
				return { value: '', error: `"${value}" is not a valid URL.` };
			}
		}
		return { value };
	};

	const handleClick = () => {
		if (value.length > 0) {
			addItem(value);
			setValue('');
			if (inputRef.current) {
				inputRef.current.value = '';
			}
		}
	};

	return (
		<div className=''>
			{label && (
				<Label data-required={required ? 'true' : undefined}>
					{label}
				</Label>
			)}
			<div className='flex gap-4'>
				<Input
					id={id}
					onChange={(event) => setValue(event.target.value)}
					value={value}
					placeholder={placeholder}
					type={type}
					required={isRequired}
				/>
				<Input
					hidden
					readOnly
					value={JSON.stringify(items)}
					type={type}
					name={name}
				/>
				<Button
					className='btn-secondary items-center'
					type='button'
					onClick={handleClick}
					disabled={value.length === 0}
				>
					<PlusIcon className='size-5' />
					Add
				</Button>
			</div>
			{errorMessage ? (
				<small className='text-danger'>{errorMessage}</small>
			) : null}
			<ul className='mt-2'>{listItems}</ul>
		</div>
	);
}
