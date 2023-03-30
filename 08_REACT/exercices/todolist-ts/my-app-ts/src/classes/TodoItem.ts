export default class TodoItem {
  private static _count = 0;
  private _id: number;
  private _isDone: boolean;

  constructor(private _title: string, private _description: string, private _dueDate: Date) {
    this._id = ++TodoItem._count;
    this._isDone = false;
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }

  get description() {
    return this._description
  }

  get dueDate() {
    return this._dueDate
  }

  get isDone() {
    return this._isDone
  }

  set isDone(value: boolean) {
    this._isDone = value
  }
}