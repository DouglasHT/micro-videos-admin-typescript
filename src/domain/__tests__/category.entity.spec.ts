import { Category } from "../category.entity";

describe("Category Unit Tests", () => {
  // Arrange Act Assert
  describe("constructor", () => {
    test("should throw error when name is empty", () => {
      const category = new Category({
        name: "Movie",
      });
      expect(category.category_id).toBeDefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test("should create a category with all values", () => {
      const created_at = new Date();
      const category = new Category({
        name: "Movie",
        description: "Movie description",
        is_active: false,
        created_at,
      });

      expect(category.category_id).toBeDefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie description");
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test("should create a category with name and description", () => {
      const category = new Category({
        name: "Movie",
        description: "Movie description",
      });

      expect(category.category_id).toBeDefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("Movie description");
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });
  });
});

describe("create command", () => {
  test("should create a category", () => {
    const category = Category.create({
      name: "Movie",
    });

    expect(category.category_id).toBeDefined();
    expect(category.name).toBe("Movie");
    expect(category.description).toBeNull();
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);
  });

  test("should create a category with description", () => {
    const category = Category.create({
      name: "Movie",
      description: "Movie description",
    });

    expect(category.category_id).toBeDefined();
    expect(category.name).toBe("Movie");
    expect(category.description).toBe("Movie description");
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);
  });

  test("should create a category with is_active", () => {
    const category = Category.create({
      name: "Movie",
      is_active: false,
    });

    expect(category.category_id).toBeDefined();
    expect(category.name).toBe("Movie");
    expect(category.description).toBeNull();
    expect(category.is_active).toBeFalsy();
    expect(category.created_at).toBeInstanceOf(Date);
  });

  test("should change name", () => {
    const category = Category.create({
      name: "Movie",
    });
    category.changeName("Movie 2");
    expect(category.name).toBe("Movie 2");
  });

  test("should change description", () => {
    const category = Category.create({
      name: "Movie",
      description: "Movie description",
    });

    category.changeDescription("Movie description 2");
    expect(category.description).toBe("Movie description 2");
  });

  test("should activate category", () => {
    const category = Category.create({
      name: "Movie",
      is_active: false,
    });

    category.activate();
    expect(category.is_active).toBeTruthy();
  });

  test("should disable category", () => {
    const category = Category.create({
      name: "Movie",
      is_active: true,
    });

    category.deactivate();
    expect(category.is_active).toBeFalsy();
  });
});
