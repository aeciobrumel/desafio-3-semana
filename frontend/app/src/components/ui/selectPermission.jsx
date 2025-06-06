export const SelectPermission = ({ value, onChange }) => {
  return (
    <div className="border-b-1 border-gray-300 p-5">
      <div className="bg-white flex p-3 rounded-md">
        <label className="text-left w-full text-sm  mt-2 mb-1">Permissão</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg bg-cinza px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-verdeclaro "
        >
          <option value=""></option>
          <option value="admin">Administrador</option>
          <option value="docente">Docente</option>
          <option value="aluno">Aluno</option>
        </select>
      </div>
    </div>
  );
};
