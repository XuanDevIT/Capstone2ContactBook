const alert_checkValidate =(title,describe)=>`  <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>${title}!</strong>${describe != undefined ?describe : 'You should check in on some of those fields below.' }.
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                 </div>`;