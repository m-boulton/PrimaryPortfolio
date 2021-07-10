function formReset() {
  document.getElementById("formName").value = "";
  document.getElementById("formEmail").value = "";
  document.getElementById("formSubject").value = "";
  document.getElementById("formMessage").value = "";
  document.getElementById("confirmEmailCheckbox").checked = false;
  document.getElementById("formMessageText").textContent = "";
}
export default formReset;
