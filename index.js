class Home {
    constructor(arr) {
        if (!arr)
            this.homes = []
        else
            this.homes = arr;
    }

    add(homeName) {
        if (!homeName || homeName == '') return;

        let home = {
            _id : this.homes.length + 1,
            homeName
        };

        this.homes.push(home);

        return this.homes;
    }

    find(_id) {
        if (this.homes.length == 0) return;

        for (let item of this.homes) {
            if (item._id == _id) return item;
        }

        return -1;
    }

    findAll() {
        return this.homes;
    }

    updateHome(_id, value) {
        for (let index in this.homes) {
            if (this.homes[index]._id == _id) {
                this.homes[index].homeName = value;

                return this.homes[index];
            }
        }

        return false;
    }
}

// class GUI {
//     constructor(actions) {
//         if (!actions) this.actions = []
//         else {
//             this.actions = actions;
//
//             for (let action of this.actions) {
//                 this.add(action);
//             }
//
//             VT.getEl('.update').value = actions[0].homeName;
//         }
//
//     }
//
//     add(action) {
//         VT.addEl(VT.getEl('select'), `<option>${ action.homeName }</option>`)
//     }
//
//     update(obj) {
//         if (!obj) return;
//
//         VT.updateEl(VT.getAllEl('select>option')[obj._id], obj.homeName);
//     }
//
//     show(element) {
//         element.style.display = 'block';
//     }
//
//     hide(element) {
//         element.style.display = 'none';
//     }
// }
//
// let state = {
//     editable : 1
// };

// const gui = new GUI(home.findAll());
//
// function action(event) {
//     state.editable = event.options.selectedIndex;
//
//     VT.getEl('.update').value = event.value;
//
// }
//
// function updateHome(event) {
//     let input = VT.getEl('.update');
//
//     let value = input.value.replace(/\s+/g,'').trim();
//
//     if (value.length == 0) {
//         VT.getEl('.input-group').classList.add('has-error');
//         input.value = '';
//         return;
//     }
//
//     gui.update(home.updateHome(state.editable, value));
// }
//
// function updateInput(event) {
//     VT.getEl('.input-group').classList.remove('has-error');
// }