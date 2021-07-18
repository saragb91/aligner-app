import React from "react";
import { Input, Form, Select, Checkbox } from "antd";
import { allStatus } from "./makeColumns";


const { Option } = Select;
const NewPatientForm = ({
  formData,
  onChange,
  onChangeSelect,

}) => {

  return (
    <Form colon={false} layout="vertical">
      <Form.Item label="Nombre">
        <Input
          type="text"
          name="nombre"
          value={formData.datos_paciente?.nombre}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item label="Apellidos">
        <Input
          type="text"
          name="apellidos"
          value={formData.datos_paciente?.apellidos}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item label="Fecha de nacimiento">
        <Input
          type="date"
          name="fecha_nacimiento"
          value={formData.datos_paciente?.fecha_nacimiento}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item label="Sexo">
        <Select
          name="sexo"
          value={formData.datos_paciente?.sexo}
          onChange={(value) => onChangeSelect(value, "sexo")}
        >
          <Option key="woman" value={formData.datos_paciente?.sexo}>
            Femenino
          </Option>
          <Option key="man" value={formData.datos_paciente?.sexo}>
            Masculino
          </Option>
        </Select>
      </Form.Item>
      <Form.Item label="Clínica dental">
        <Input
          type="input"
          name="clinica"
          value={formData.ficha_dental?.clinica}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item label="Recorte Alineadores">
        <Checkbox
          name="recorte_alineadores"
          value={formData.ficha_dental?.otros_datos?.recorte_alineadores}
          onChange={(e) => onChangeSelect("Recortar dejando 1-3cm de encía",e.target.name )}
        >
          Recortar dejando 1-3cm de encía
        </Checkbox>
        <Checkbox
          name="recorte_alineadores"
          value={formData.ficha_dental?.otros_datos?.recorte_alineadores}
          onChange={(e) => onChangeSelect('Recortar a nivel de los cuellos',e.target.name)}
        >
          Recortar a nivel de los cuellos
        </Checkbox>
      </Form.Item>
      <Form.Item label="SecretRetainer">
        <Checkbox
          name="secretretainer"
          disabled={formData.secretretainer===false}
          value={formData.ficha_dental?.otros_datos?.secretretainer}
          onChange={(e) => onChangeSelect(true,e.target.name, e.target.checked)}
        >
          Si
        </Checkbox>
        <Checkbox
          name="secretretainer"
          disabled={formData.secretretainer===true}
          value={formData.ficha_dental?.otros_datos?.secretretainer}
          onChange={(e) => onChangeSelect(false,e.target.name, e.target.checked)}
        >
          No
        </Checkbox>
      </Form.Item>
      <Form.Item label="Objetivo">
        <Input
          type="input"
          name="objetivo_tratamiento"
          value={formData.ficha_dental?.objetivo_tratamiento}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item label="Estado">
        <Select
          name="estado"
          value={formData.ficha_dental?.estado}
          onChange={(value) => onChangeSelect(value, "estado")}
        >
          {allStatus.map((status) => {
            return (
              <Option key={status} value={formData.ficha_dental?.estado}>
                {status}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    
    </Form>
  );
};

export default NewPatientForm;
