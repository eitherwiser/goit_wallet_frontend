import { useCallback, Fragment } from "react";
import Media from "react-media";
import { createPortal } from "react-dom";

import { useDispatch, useSelector } from "react-redux";

import s from "./ButtonAddTransactions.module.css";
import { globalAction, globalSelectors } from "../../redux/global";

import AddIcon from "@material-ui/icons/Add";

import Modal from "../ModalAddTransaction/ModalAddTransaction";
// import FormAddTransactions from '../ModalAddTransactions/FormAddTransactions';


const button = document.getElementById("button");


export default function ButtonAddTransaction() {
  const dispatch = useDispatch();

  const modal = useSelector(globalSelectors.getModalValue);

  const closeModal = useCallback(
    () => dispatch(globalAction.closeModal()),
    [dispatch]
  );

  const openModal = useCallback(
    () => dispatch(globalAction.openModal()),
    [dispatch]
  );

  return (
    <>
      <button
        className={s.button}
        type="button"
        name="addOperation"
        onClick={openModal}
      >
        <AddIcon className={s.buttonIcon} fontSize="large" />
      </button>

      <>
        <Media
          queries={{

            small: "(max-width: 550px)",

            medium: "(min-width: 549px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small &&
                createPortal(
                  <>
                    {modal && (
                      <div className={s.modalMobile}>
                        {/* <FormAddTransactions /> */}
                      </div>
                    )}
                  </>,

                  button

                )}

              {matches.medium && (
                <>
                  {modal && (
                    <Modal modalValue={modal} modalAction={closeModal}>
                      {/* <FormAddTransactions /> */}
                    </Modal>
                  )}
                </>
              )}
            </Fragment>
          )}
        </Media>
      </>
    </>
  );
}
