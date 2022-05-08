import React from "react";

const List = (props) => {
  const {
    list,
    dlt,
    isEdit,
    handleEdit,
    handleSave,
    currentTodo,
    handleEditChange,
  } = props;
  return (
    <div className="row">
      {isEdit ? (
        <div>
          <input value={currentTodo.text} onChange={handleEditChange} />
          <button className="btn btn-success m-2" onClick={handleSave}>
            Save{" "}
          </button>
        </div>
      ) : (
        list.map((item, index) => {
          return (
            <>
              <div className="col-12 d-block">
                <p className="text-white mt-2">
                  #{index + 1} : {item}
                </p>
              </div>
              <div className="col-2">
                <button
                  onClick={() => {
                    dlt(index);
                  }}
                  className="btn btn-success "
                >
                  Complete
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    handleEdit(index);
                  }}
                  className="btn btn-warning "
                >
                  Edit
                </button>
              </div>
            </>
          );
        })
      )}
    </div>
  );
};

export default List;
