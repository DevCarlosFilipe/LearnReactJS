function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto" />
            </div>
            <div>
                <input type="text" placeholder="Insira o orçamento total" />
            </div>
            <div>
                <select name="category_id">
                    <option disabled>Selecione a categoria</option>
                    <option value="1">cat 1</option>
                    <option value="2">cat 2</option>
                </select>
            </div>
            <div>
                <button>Criar Projeto</button>
            </div>
        </form>
    );
}

export default ProjectForm;
