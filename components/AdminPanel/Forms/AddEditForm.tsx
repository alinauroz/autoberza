import Input from '@/components/Elements/Input';
import React, { useState } from 'react';
import csv from 'csvtojson';
import { gql, useMutation } from 'urql';
import fdtojson from '@/utils/fdtojson';
import Button from '@/components/Elements/Button';
import { toast } from 'react-hot-toast';
import { IForm } from '.';

const CREATE_FORM = gql`
  mutation CreateFieldForm($category: String!, $fields: JSON!) {
    createFieldForm(category: $category, fields: $fields) {
      category
      fields
      id
    }
  }
`;

export const UPDATE_FORM = gql`
  mutation Mutation($id: String!, $category: String, $fields: JSON) {
    updateFieldForm(id: $id, category: $category, fields: $fields) {
      category
      createdOn
      fields
      id
    }
  }
`;

function AddEditForm({
  onDone,
  prefill,
}: {
  onDone: () => void;
  prefill?: IForm;
}) {
  const [fields, setFields] = useState<unknown>([]);
  const [{ fetching: creating }, createForm] = useMutation(CREATE_FORM);
  const [{ fetching: updating }, updateForm] = useMutation(UPDATE_FORM);

  const parseFields = (data: unknown[]) => {
    const fields: unknown[] = [];
    data.forEach((csvRow) => {
      const row = JSON.parse(JSON.stringify(csvRow));
      switch (row['Type']) {
        case 'Checkbox': {
          const field = {
            type: 'checkbox',
            label: row['Name'],
            section: row['Section'],
            name: row['Id'],
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
            name: row['Id'],
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
            addon: row['Addon'],
            name: row['Id'],
          };
          fields.push(field);
          break;
        }
        default: {
          //console.log('Error', row);
        }
      }
      console.log(fields);
      setFields(fields);
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
            .then((fields) => parseFields(fields));
        }
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const variables = fdtojson(fd);
    variables.fields = fields;
    if (prefill) {
      variables.id = prefill.id;
      updateForm(variables).then((d) => {
        toast.success('Form created');
        onDone();
      });
    } else {
      createForm(variables).then((d) => {
        toast.success('Form created');
        onDone();
      });
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <Input
          name="category"
          label="Category"
          placeholder="Category"
          defaultValue={prefill?.category}
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
        <Button
          text={prefill ? 'Update' : 'Create'}
          loading={creating || updating}
        />
      </form>
    </div>
  );
}

export default AddEditForm;
