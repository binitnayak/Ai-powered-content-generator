"use client";

import React, { useState } from 'react';
import { TEMPLATE } from '@/app/types';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormClick?: (data: any) => void;
  loading?: boolean;
}

function FormSection({ selectedTemplate, userFormClick, loading }: PROPS) {
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userFormClick) {
      userFormClick(formData);
    }
  };

  return (
    <div className='p-5 shadow-lg border rounded-lg bg-white'>
      {/* Header section with Icon, Name and Description */}
      {selectedTemplate?.icon && (
        <Image src={selectedTemplate.icon} alt="icon" width={70} height={70} />
      )}
      <h2 className='font-bold text-2xl mb-2 text-primary mt-4'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

      {/* Dynamic Form Generation */}
      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className='my-5 flex flex-col gap-2'>
            <label className='font-bold text-sm'>{item.label}</label>
            {item.field === 'input' ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                className='w-full'
              />
            ) : item.field === 'textarea' ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                className='w-full'
                rows={5}
              />
            ) : null}
          </div>
        ))}

        <Button type="submit" className='w-full py-6 mt-4' disabled={loading}>
          {loading && <Loader2 className='animate-spin mr-2' />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;