import Input from '@/components/Elements/Input';
import React, { useState } from 'react';
import csv from 'csvtojson';

function AddEditForm() {
  const [fields, setFields] = useState<unknown>([]);

  const parseFields = (data: unknown[]) => {
    const fields = [];
    data.forEach((csvRow) => {
      const row = JSON.parse(JSON.stringify(csvRow));
      switch (row['Type']) {
        case 'Checkbox': {
          const field = {
            type: 'checkbox',
            label: row['Name'],
            section: row['Section'],
          };
          fields.push(field);
          break;
        }
        case 'Dropdown': {
          const field = {
            type: 'select',
            label: row['Name'],
            section: row['Section'],
            options: row['Options'].split(';'),
          };
          fields.push(field);
          break;
        }
        case 'Freetext': {
          const field = {
            type: 'text',
            label: row['Name'],
            section: row['Section'],
            placeholder: row['Placeholder'],
          };
          fields.push(field);
          break;
        }
        default: {
          console.log('Error', row);
        }
      }
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const text = event.target.result as string;
          csv()
            .fromString(text.trim())
            .then((fields) => setFields(fields));
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="w-full">
      <form>
        <Input
          name="category"
          label="Category"
          placeholder="Category"
          required
        />
        <div className="inputs">
          <label className="label">File</label>
          <input
            className="input-field"
            onChange={handleFileUpload}
            type="file"
          />
        </div>
      </form>
    </div>
  );
}

export default AddEditForm;
