import React from 'react'
import { Form, Label, TextArea, Input, Checkbox, Popup } from "semantic-ui-react";
import "../../../app/App.css";
import { List, Button } from 'semantic-ui-react';
import { Field } from "react-final-form";

const style = {
  opacity: 0.87,
  color: 'red'
};

export const InputText = (props) => {
  const { placeholder, position, icon, iconPosition, type, input, meta: {name, active, error, touched } } = props;
 return (
   <div className={active ? 'active' : ''}>
    <Popup 
      color='red'
      key={placeholder} 
      trigger={< Form.Input name={name} type={type} icon={icon} iconPosition={iconPosition} placeholder={placeholder} {...input} />}
      header={placeholder}
      content={error}
      position={position ? position : 'right center'}
      style={style}
      // on='focus'
      //  open={!error ? false : null}      
      />     
   </div>
 );
}

export const EmailInputText = (props) => {
 const { style, placeholder, iconPosition, type, input, meta: { active, error, touched } } = props;
 return (
  <div className={active ? "active" : ""}>
   <Input
    icon='at'
    style={style}
    type={type}
    placeholder={placeholder}
    iconPosition={iconPosition}
    {...input}
    />    
   {error && touched && <Label basic color='red' pointing>{error}</Label>} 
   {/* {error && touched && <span>{error}</span>}  */}
  </div>
 );
}

export const InputTextArea = (props) => {
  const { minHeight, autoHeight, placeholder, type, input, meta: { active, error, touched } } = props;
  return (
    <div className={active ? "active" : ""}>
      <TextArea
        type={type}
        style={minHeight}
        autoHeight={autoHeight}
        label={placeholder}
        placeholder={placeholder}
        {...input}
      />
      {error && touched && <span>{error}</span>}
    </div>
  );
}

export const InputCheckBox = (props) => {
  const { input: { value, onChange, ...input }, label, type, meta: { active, error, touched } } = props;
  return (
    <div className={active ? "active" : ""}>
      <Checkbox
        {...input}
        label={label}
        type={type}
        onChange={(e, data) => onChange(data.checked)}
      />
      {error && touched && <span>{error}</span>}
    </div>);
}

export const DropdownMenu = ({ active, input, type, label, multiple, options, meta: { touched, error } }) => {
  return( 
    <div className={active ? "active" : ""}>
      <Form.Dropdown
        {...input}
        // label={label}
        value={input.value || null}
        onChange={(e, data) => input.onChange(data.value)}
        search
        selection
        placeholder={label}
        options={options}
      />
      {error && touched && <span>{error}</span>}
    </div>
    )
}
export const DatePicker = (props) => {
  const { icon,style, input, iconPosition, label, type, meta: { active, error, touched } } = props;
  return (
    <div className={active ? "active" : ""}>
      <Form.Input
        {...input}
        type={type}
        iconPosition={iconPosition}
        icon={icon}
        style={style}
        placeholder={label}>
        </Form.Input>
      {error && touched && <span>{error}</span>}
    </div >
  );
}

export const RenderSocials = ({ fields, meta: { touched, pristine, error}}) => {
  return (
    <div>
      <Form.Group>
        <Form.Field width={16}>
          <List>
            {fields.map((field, index) => (
              <List.Item key={index}>
                <Form.Group>
                  <Form.Field width={15}>
                    <Field
                      name={`${field}.name`}
                      type="text"
                      component={InputText}
                      placeholder="Add Link of Your Social Media Page"
                    />
                  </Form.Field>
                  <Form.Field width={1}>
                    <Form.Button
                      icon="trash"
                      circular
                      type="button"
                      onClick={() => fields.remove(index)}
                    />
                  </Form.Field>
                </Form.Group>
              </List.Item>
            ))}
          </List>
        </Form.Field>
      </Form.Group>
      <Form.Group>
        <Form.Field style={{ textAlign: "right" }} width={12}>
          {error && error._error && (
            <Label basic color="red" pointing="right" position="top center">
              {error._error}
            </Label>
          )}
          {error && !error._error && (
            <Label basic color="red" pointing position="top center">
              {"Must provide a valid url link i.e. http://facebook.com and not too many link"}
            </Label>
          )}
        </Form.Field>
        <Form.Field width={4}>
          <Form.Button
            type="button"
            icon="plus"
            negative
            content="Add Link"
            onClick={() => fields.push({})}
          />
        </Form.Field>
      </Form.Group>
    </div>
  );
}