import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useOrthodontic = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showPatientFileModal, setShowPatientFileModal] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState({});
  const [patientsView, setPatientsView] = useState({
    structure: "list",
    number: 5,
  });

  const readApi = useCallback(() => {
    return fetch("customers.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  }, []);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );
  const handleChangeSelect = useCallback(
    (value, name, checked = null) => {
      if (checked === false)
        return setFormData({ ...formData, secretretainer: null });

      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );

  const handleChangeView = useCallback(
    (name, value) => {
      setPatientsView({ ...patientsView, [name]: value });
    },
    [patientsView]
    );
    
    const handleShowModal = useCallback(() => {
      setShowModal(!showModal);
      setFormData({});
    }, [showModal]);
    
    const handleShowPatientFile = useCallback(
      (record) => {
        setShowPatientFileModal(!showPatientFileModal);
        setSelectedPatient(record);
      },
      [showPatientFileModal]
      );
      
      const handleChangeSearch = (e) => {
        setSearch(e.target.value);
      };

  const handleAddPatient = useCallback(() => {
    const id = uuidv4();
    setCustomers({
      ...customers,
      [id]: {
        datos_paciente: {
          nombre: formData.nombre,
          apellidos: formData.apellidos,
          fecha_nacimiento: formData.fecha_nacimiento,
          sexo: formData.sexo,
        },
        ficha_dental: {
          clinica: formData.clinica,
          objetivo_tratamiento: formData.objetivo_tratamiento,
          estado: formData.estado,
          otros_datos: {
            recorte_alineadores: formData.recorte_alineadores,
            secretretainer: formData.secretretainer,
          },
        },
        id: id,
      },
    });
    setShowModal(false);
    setFormData({});
  }, [customers, formData]);



  const handleEdit = useCallback(
    (id) => {
      const customer = customers[id];
      setFormData({ ...customer });
      setShowModal(!showModal);
    },
    [customers, showModal]
  );

  const handleFinish = useCallback(
    (id) => {
      setCustomers({
        ...customers,
        [id]: {
          ...customers[id],
          ficha_dental: { ...customers[id].ficha_dental, estado: "finalizado" },
        },
      });
    },
    [customers]
  );

  const handleRemovePatient = useCallback(
    (id) =>
      setCustomers(
        Object.values(customers).filter((customer) => customer.id !== id)
      ),

    [customers]
  );

  const searchPatient = search.toLowerCase();

  const filterPatient = useCallback(() => {
    if (search.length === 0) return Object.values(customers);

    return Object.values(customers).filter(
      (customer) =>
        customer.datos_paciente?.nombre.toLowerCase().includes(searchPatient) ||
        customer.datos_paciente?.apellidos.toLowerCase().includes(searchPatient)
    );
  }, [customers, search.length, searchPatient]);

  useEffect(() => {
    readApi().then((data) => {
      for (const i in data) {
        data[i].id = i;
      }

      setCustomers(data);
    });
  }, [readApi]);

  return {
    customers,
    patientsView,
    showModal,
    handleChangeView,
    handleShowModal,
    handleFinish,
    formData,
    handleChange,
    handleAddPatient,
    handleChangeSelect,
    handleEdit,
    handleShowPatientFile,
    showPatientFileModal,
    selectedPatient,
    handleRemovePatient,
    search,
    handleChangeSearch,
    filterPatient
  };
};

export default useOrthodontic;
